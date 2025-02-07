// lib/sanity.ts

import { createClient, ClientConfig } from '@sanity/client';

export const client = createClient({
  projectId: 'xp1ocyiu', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: 'v2025-01-18', // Use the current date
  token:"skasXEZgK4Xq7LowfxbgGD6XBUeu69a139y4jvIImjY7wYUmwgscPAzxVo7mKZzLiKxySTkfGbpF8d3U0DkhVJIKvzsWwXoXvdvNF7usZ4Watxfqg6vV7on8K1g5QsgVLvCMG8T3HlzF53VwFqDvydixllSxqGvhMHv9ZjVXEtHm4n0HBw78",
  useCdn: true, // Set to true for production, false for fresh data
} as ClientConfig);
