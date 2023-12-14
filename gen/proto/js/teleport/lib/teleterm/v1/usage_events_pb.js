// source: teleport/lib/teleterm/v1/usage_events.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var prehog_v1alpha_connect_pb = require('../../../../prehog/v1alpha/connect_pb.js');
goog.object.extend(proto, prehog_v1alpha_connect_pb);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ReportUsageEventRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ReportUsageEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.displayName = 'proto.teleport.lib.teleterm.v1.ReportUsageEventRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ReportUsageEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    prehogReq: (f = msg.getPrehogReq()) && prehog_v1alpha_connect_pb.SubmitConnectEventRequest.toObject(includeInstance, f),
    anonymizationKey: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ReportUsageEventRequest}
 */
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ReportUsageEventRequest;
  return proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ReportUsageEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ReportUsageEventRequest}
 */
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new prehog_v1alpha_connect_pb.SubmitConnectEventRequest;
      reader.readMessage(value,prehog_v1alpha_connect_pb.SubmitConnectEventRequest.deserializeBinaryFromReader);
      msg.setPrehogReq(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnonymizationKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ReportUsageEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrehogReq();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prehog_v1alpha_connect_pb.SubmitConnectEventRequest.serializeBinaryToWriter
    );
  }
  f = message.getAnonymizationKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional prehog.v1alpha.SubmitConnectEventRequest prehog_req = 2;
 * @return {?proto.prehog.v1alpha.SubmitConnectEventRequest}
 */
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.prototype.getPrehogReq = function() {
  return /** @type{?proto.prehog.v1alpha.SubmitConnectEventRequest} */ (
    jspb.Message.getWrapperField(this, prehog_v1alpha_connect_pb.SubmitConnectEventRequest, 2));
};


/**
 * @param {?proto.prehog.v1alpha.SubmitConnectEventRequest|undefined} value
 * @return {!proto.teleport.lib.teleterm.v1.ReportUsageEventRequest} returns this
*/
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.prototype.setPrehogReq = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.teleport.lib.teleterm.v1.ReportUsageEventRequest} returns this
 */
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.prototype.clearPrehogReq = function() {
  return this.setPrehogReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.prototype.hasPrehogReq = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string anonymization_key = 3;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.prototype.getAnonymizationKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.ReportUsageEventRequest} returns this
 */
proto.teleport.lib.teleterm.v1.ReportUsageEventRequest.prototype.setAnonymizationKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.teleport.lib.teleterm.v1);
