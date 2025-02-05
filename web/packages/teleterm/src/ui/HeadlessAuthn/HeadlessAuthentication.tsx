/**
 * Teleport
 * Copyright (C) 2023  Gravitational, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { useRef, useEffect } from 'react';

import { useAsync } from 'shared/hooks/useAsync';

import { useAppContext } from 'teleterm/ui/appContextProvider';
import { RootClusterUri } from 'teleterm/ui/uri';

import { HeadlessAuthenticationState } from 'teleterm/services/tshd/types';

import { HeadlessPrompt } from './HeadlessPrompt';

interface HeadlessAuthenticationProps {
  rootClusterUri: RootClusterUri;
  headlessAuthenticationId: string;
  clientIp: string;
  skipConfirm: boolean;
  onCancel(): void;
  onSuccess(): void;
}

export function HeadlessAuthentication(props: HeadlessAuthenticationProps) {
  const { headlessAuthenticationService, clustersService } = useAppContext();
  const refAbortCtrl = useRef(clustersService.client.createAbortController());
  const cluster = clustersService.findCluster(props.rootClusterUri);

  const [updateHeadlessStateAttempt, updateHeadlessState] = useAsync(
    (state: HeadlessAuthenticationState) =>
      headlessAuthenticationService.updateHeadlessAuthenticationState(
        {
          rootClusterUri: props.rootClusterUri,
          headlessAuthenticationId: props.headlessAuthenticationId,
          state: state,
        },
        refAbortCtrl.current.signal
      )
  );

  async function handleHeadlessApprove(): Promise<void> {
    const [, error] = await updateHeadlessState(
      HeadlessAuthenticationState.HEADLESS_AUTHENTICATION_STATE_APPROVED
    );
    if (!error) {
      props.onSuccess();
    }
  }

  async function handleHeadlessReject(): Promise<void> {
    const [, error] = await updateHeadlessState(
      HeadlessAuthenticationState.HEADLESS_AUTHENTICATION_STATE_DENIED
    );
    if (!error) {
      props.onSuccess();
    }
  }

  useEffect(() => {
    if (props.skipConfirm && updateHeadlessStateAttempt.status === '') {
      handleHeadlessApprove();
    }
  }, []);

  return (
    <HeadlessPrompt
      cluster={cluster}
      clientIp={props.clientIp}
      skipConfirm={props.skipConfirm}
      onApprove={handleHeadlessApprove}
      abortApproval={refAbortCtrl.current.abort}
      onReject={handleHeadlessReject}
      headlessAuthenticationId={props.headlessAuthenticationId}
      updateHeadlessStateAttempt={updateHeadlessStateAttempt}
      onCancel={props.onCancel}
    />
  );
}
