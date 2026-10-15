const ERRORS = {
    // ==========================================
    // 1xx - INFORMATIONAL
    // ==========================================

    CONTINUE: {
        code: 'CONTINUE',
        message: 'Continue',
        status: 100
    },
    SWITCHING_PROTOCOLS: {
        code: 'SWITCHING_PROTOCOLS',
        message: 'Switching protocols',
        status: 101
    },
    PROCESSING: {
        code: 'PROCESSING',
        message: 'Request is being processed',
        status: 102
    },
    EARLY_HINTS: {
        code: 'EARLY_HINTS',
        message: 'Early hints',
        status: 103
    },

    // ==========================================
    // 2xx - SUCCESS
    // ==========================================

    OK: {
        code: 'OK',
        message: 'OK',
        status: 200
    },
    CREATED: {
        code: 'CREATED',
        message: 'Resource created',
        status: 201
    },
    ACCEPTED: {
        code: 'ACCEPTED',
        message: 'Request accepted for processing',
        status: 202
    },
    NON_AUTHORITATIVE_INFORMATION: {
        code: 'NON_AUTHORITATIVE_INFORMATION',
        message: 'Non-authoritative information',
        status: 203
    },
    NO_CONTENT: {
        code: 'NO_CONTENT',
        message: 'No content',
        status: 204
    },
    RESET_CONTENT: {
        code: 'RESET_CONTENT',
        message: 'Reset content',
        status: 205
    },
    PARTIAL_CONTENT: {
        code: 'PARTIAL_CONTENT',
        message: 'Partial content',
        status: 206
    },
    MULTI_STATUS: {
        code: 'MULTI_STATUS',
        message: 'Multi-status',
        status: 207
    },
    ALREADY_REPORTED: {
        code: 'ALREADY_REPORTED',
        message: 'Already reported',
        status: 208
    },
    IM_USED: {
        code: 'IM_USED',
        message: 'IM used',
        status: 226
    },

    // ==========================================
    // 3xx - REDIRECTION
    // ==========================================

    MULTIPLE_CHOICES: {
        code: 'MULTIPLE_CHOICES',
        message: 'Multiple choices',
        status: 300
    },
    MOVED_PERMANENTLY: {
        code: 'MOVED_PERMANENTLY',
        message: 'Resource moved permanently',
        status: 301
    },
    FOUND: {
        code: 'FOUND',
        message: 'Resource found at a different URI',
        status: 302
    },
    SEE_OTHER: {
        code: 'SEE_OTHER',
        message: 'See other resource',
        status: 303
    },
    NOT_MODIFIED: {
        code: 'NOT_MODIFIED',
        message: 'Resource not modified',
        status: 304
    },
    USE_PROXY: {
        code: 'USE_PROXY',
        message: 'Use proxy',
        status: 305
    },
    TEMPORARY_REDIRECT: {
        code: 'TEMPORARY_REDIRECT',
        message: 'Temporary redirect',
        status: 307
    },
    PERMANENT_REDIRECT: {
        code: 'PERMANENT_REDIRECT',
        message: 'Permanent redirect',
        status: 308
    },

    // ==========================================
    // 4xx - CLIENT ERRORS
    // ==========================================

    BAD_REQUEST: {
        code: 'BAD_REQUEST',
        message: 'Bad request',
        status: 400
    },
    UNAUTHORIZED: {
        code: 'UNAUTHORIZED',
        message: 'Authentication is required',
        status: 401
    },
    PAYMENT_REQUIRED: {
        code: 'PAYMENT_REQUIRED',
        message: 'Payment required',
        status: 402
    },
    FORBIDDEN: {
        code: 'FORBIDDEN',
        message: 'You do not have permission',
        status: 403
    },
    NOT_FOUND: {
        code: 'NOT_FOUND',
        message: 'Resource not found',
        status: 404
    },
    METHOD_NOT_ALLOWED: {
        code: 'METHOD_NOT_ALLOWED',
        message: 'HTTP method not allowed',
        status: 405
    },
    NOT_ACCEPTABLE: {
        code: 'NOT_ACCEPTABLE',
        message: 'Requested format is not acceptable',
        status: 406
    },
    PROXY_AUTHENTICATION_REQUIRED: {
        code: 'PROXY_AUTHENTICATION_REQUIRED',
        message: 'Proxy authentication required',
        status: 407
    },
    REQUEST_TIMEOUT: {
        code: 'REQUEST_TIMEOUT',
        message: 'Request timeout',
        status: 408
    },
    CONFLICT: {
        code: 'CONFLICT',
        message: 'Resource conflict',
        status: 409
    },
    GONE: {
        code: 'GONE',
        message: 'Resource is no longer available',
        status: 410
    },
    LENGTH_REQUIRED: {
        code: 'LENGTH_REQUIRED',
        message: 'Content length is required',
        status: 411
    },
    PRECONDITION_FAILED: {
        code: 'PRECONDITION_FAILED',
        message: 'Precondition failed',
        status: 412
    },
    CONTENT_TOO_LARGE: {
        code: 'CONTENT_TOO_LARGE',
        message: 'Request content is too large',
        status: 413
    },
    URI_TOO_LONG: {
        code: 'URI_TOO_LONG',
        message: 'Request URI is too long',
        status: 414
    },
    UNSUPPORTED_MEDIA_TYPE: {
        code: 'UNSUPPORTED_MEDIA_TYPE',
        message: 'Unsupported media type',
        status: 415
    },
    RANGE_NOT_SATISFIABLE: {
        code: 'RANGE_NOT_SATISFIABLE',
        message: 'Requested range cannot be satisfied',
        status: 416
    },
    EXPECTATION_FAILED: {
        code: 'EXPECTATION_FAILED',
        message: 'Request expectation failed',
        status: 417
    },
    IM_A_TEAPOT: {
        code: 'IM_A_TEAPOT',
        message: 'I\'m a teapot',
        status: 418
    },
    MISDIRECTED_REQUEST: {
        code: 'MISDIRECTED_REQUEST',
        message: 'Misdirected request',
        status: 421
    },
    UNPROCESSABLE_CONTENT: {
        code: 'UNPROCESSABLE_CONTENT',
        message: 'Request content cannot be processed',
        status: 422
    },
    LOCKED: {
        code: 'LOCKED',
        message: 'Resource is locked',
        status: 423
    },
    FAILED_DEPENDENCY: {
        code: 'FAILED_DEPENDENCY',
        message: 'A dependent request failed',
        status: 424
    },
    TOO_EARLY: {
        code: 'TOO_EARLY',
        message: 'Request was received too early',
        status: 425
    },
    UPGRADE_REQUIRED: {
        code: 'UPGRADE_REQUIRED',
        message: 'Protocol upgrade required',
        status: 426
    },
    PRECONDITION_REQUIRED: {
        code: 'PRECONDITION_REQUIRED',
        message: 'A precondition is required',
        status: 428
    },
    TOO_MANY_REQUESTS: {
        code: 'TOO_MANY_REQUESTS',
        message: 'Too many requests',
        status: 429
    },
    REQUEST_HEADER_FIELDS_TOO_LARGE: {
        code: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
        message: 'Request headers are too large',
        status: 431
    },
    UNAVAILABLE_FOR_LEGAL_REASONS: {
        code: 'UNAVAILABLE_FOR_LEGAL_REASONS',
        message: 'Resource is unavailable for legal reasons',
        status: 451
    },

    // ==========================================
    // 5xx - SERVER ERRORS
    // ==========================================

    INTERNAL_SERVER_ERROR: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Internal server error',
        status: 500
    },
    NOT_IMPLEMENTED: {
        code: 'NOT_IMPLEMENTED',
        message: 'Functionality is not implemented',
        status: 501
    },
    BAD_GATEWAY: {
        code: 'BAD_GATEWAY',
        message: 'Invalid response from upstream server',
        status: 502
    },
    SERVICE_UNAVAILABLE: {
        code: 'SERVICE_UNAVAILABLE',
        message: 'Service is temporarily unavailable',
        status: 503
    },
    GATEWAY_TIMEOUT: {
        code: 'GATEWAY_TIMEOUT',
        message: 'Upstream server timed out',
        status: 504
    },
    HTTP_VERSION_NOT_SUPPORTED: {
        code: 'HTTP_VERSION_NOT_SUPPORTED',
        message: 'HTTP version is not supported',
        status: 505
    },
    VARIANT_ALSO_NEGOTIATES: {
        code: 'VARIANT_ALSO_NEGOTIATES',
        message: 'Server configuration negotiation error',
        status: 506
    },
    INSUFFICIENT_STORAGE: {
        code: 'INSUFFICIENT_STORAGE',
        message: 'Insufficient storage',
        status: 507
    },
    LOOP_DETECTED: {
        code: 'LOOP_DETECTED',
        message: 'Infinite loop detected',
        status: 508
    },
    NOT_EXTENDED: {
        code: 'NOT_EXTENDED',
        message: 'Further extensions are required',
        status: 510
    },
    NETWORK_AUTHENTICATION_REQUIRED: {
        code: 'NETWORK_AUTHENTICATION_REQUIRED',
        message: 'Network authentication required',
        status: 511
    },

    // ==========================================
    // APPLICATION / BUSINESS ERRORS
    // ==========================================

    VALIDATION_ERROR: {
        code: 'VALIDATION_ERROR',
        message: 'Validation failed',
        status: 422
    },
    USER_NOT_FOUND: {
        code: 'USER_NOT_FOUND',
        message: 'User does not exist',
        status: 404
    },
    PRODUCT_NOT_FOUND: {
        code: 'PRODUCT_NOT_FOUND',
        message: 'Product does not exist',
        status: 404
    },
    EMAIL_ALREADY_EXISTS: {
        code: 'EMAIL_ALREADY_EXISTS',
        message: 'Email is already registered',
        status: 409
    },
    INVALID_CREDENTIALS: {
        code: 'INVALID_CREDENTIALS',
        message: 'Invalid email or password',
        status: 401
    },
    SESSION_EXPIRED: {
        code: 'SESSION_EXPIRED',
        message: 'Session has expired',
        status: 401
    },
    CSRF_INVALID: {
        code: 'CSRF_INVALID',
        message: 'Invalid CSRF token',
        status: 403
    },
    DATABASE_ERROR: {
        code: 'DATABASE_ERROR',
        message: 'A database error occurred',
        status: 500
    }
};

module.exports = ERRORS;
