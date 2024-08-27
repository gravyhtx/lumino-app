//*[ MODELS ]*//

/**
 * Types representing ChatGPT models.
 */
export type ChatGPTModel = 'gpt-3.5-turbo' | 'gpt-4';

/**
 * Types representing DALL-E models.
 */
export type DalleModel = 'dall-e';

/**
 * Types representing Whisper models.
 */
export type WhisperModel = 'whisper-1';

/**
 * Types representing Codex models.
 */
export type CodexModel = 'codex';

/**
 * Types representing OpenAI models.
 */
export type OpenAIModel = ChatGPTModel | DalleModel | WhisperModel | CodexModel;


//*[ MESSAGES ]*//

/**
 * Types representing ChatGPT roles.
 */
export type ChatGPTRole = 'user' | 'system' | 'assistant';

/**
 * Types representing a ChatGPT message.
 */
export type ChatGPTMessage = {
  role: ChatGPTRole;
  content: string;
};


//*[ PARAMETERS AND RESPONSES ]*//

/**
 * Types representing parameters for creating chat completions.
 */
export type ChatCompletionCreateParams = {
  model: ChatGPTModel;
  messages: (ChatGPTMessage)[];
  stream?: boolean;
};

/**
 * Types representing the response for chat completions.
 */
export type ChatCompletionResponse = {
  id: string;
  object: string;
  created: number;
  model: ChatGPTModel;
  choices: Array<{
    message: ChatGPTMessage;
    finish_reason: string;
  }>;
};

/**
 * Types representing parameters for creating images.
 */
export type ImageCreateParams = {
  prompt: string;
  n?: number;
  size?: '256x256' | '512x512' | '1024x1024';
};

/**
 * Types representing the response for creating images.
 */
export type ImageCreateResponse = {
  created: number;
  data: Array<{
    url: string;
  }>;
};

/**
 * Types representing a streaming response.
 */
export type StreamResponse = {
  choices: Array<{
    delta: {
      content?: string;
    };
  }>;
};


//*[ UTILITIES ]*//

/**
 * Types representing parameters for tokenization.
 */
export type TokenizationParams = {
  text: string;
  model: ChatGPTModel;
};

/**
 * Types representing the response for tokenization.
 */
export type TokenizationResponse = {
  tokens: string[];
  token_ids: number[];
};