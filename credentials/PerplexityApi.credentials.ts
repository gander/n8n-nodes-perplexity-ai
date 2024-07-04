import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PerplexityApi implements ICredentialType {
	name = 'perplexityApi';
	displayName = 'Perplexity API';
	documentationUrl = 'https://docs.perplexity.ai/reference';
	properties: INodeProperties[] = [
		{
			displayName: 'API URL',
			name: 'apiUrl',
			type: 'string',
			default: 'https://api.perplexity.ai/chat/completions',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
		{
			displayName: 'API Model',
			name: 'apiModel',
			type: 'options',
			options: [
				{
					name: 'llama-3-sonar-small-32k-chat',
					value: 'llama-3-sonar-small-32k-chat',
				},
				{
					name: 'llama-3-sonar-small-32k-online',
					value: 'llama-3-sonar-small-32k-online',
				},
				{
					name: 'llama-3-sonar-large-32k-chat',
					value: 'llama-3-sonar-large-32k-chat',
				},
				{
					name: 'llama-3-sonar-large-32k-online',
					value: 'llama-3-sonar-large-32k-online',
				},
				{
					name: 'llama-3-8b-instruct',
					value: 'llama-3-8b-instruct',
				},
				{
					name: 'llama-3-70b-instruct',
					value: 'llama-3-70b-instruct',
				},
				{
					name: 'mixtral-8x7b-instruct',
					value: 'mixtral-8x7b-instruct',
				},
			],
			default: 'llama-3-sonar-small-32k-online',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.apiUrl}}',
			method: 'POST',
			body: {
				model: 'llama-3-sonar-small-32k-online',
				messages: [
					{
						role: 'user',
						content: 'Hello, how are you?',
					},
				],
			},
		},
	};
}
