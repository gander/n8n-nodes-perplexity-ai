import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class PerplexityApi implements INodeType {
	description: INodeTypeDescription = {
		properties: [],
		displayName: 'Perplexity API',
		name: 'perplexityApi',
		icon: 'file:perplexity.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Interact with the Perplexity API',
		defaults: {
			name: 'Perplexity API',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'perplexityApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.perplexity.ai',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
	};
}
