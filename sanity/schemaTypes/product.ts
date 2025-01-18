// schemas/product.js

import { defineType } from "sanity"

export default defineType ({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'A unique slug for the product page',
        options: {
          source: 'name', // Automatically generates slug from name
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true, // Allow the user to focus on part of the image
        },
        fields: [
          {
            name: 'alt',
            title: 'Image Alt Text',
            type: 'string',
          },
        ],
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'discountPercentage',
        title: 'Discount Percentage',
        type: 'number',
        description: 'Enter discount percentage if any (e.g. 20 for 20%)',
      },
      {
        name: 'isFeaturedProduct',
        title: 'Is Featured Product',
        type: 'boolean',
        description: 'Check if this product is featured on the homepage',
        initialValue: false,
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'stockLevel',
        title: 'Stock Level',
        type: 'number',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
    ],
  });
  