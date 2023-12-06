export const site = {
  name: "site",
  title: "Site content",
  type: "document",
  fields: [
    {
      name: "heroTitle",
      title: "Hero title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroSubtitle",
      title: "Hero subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroButtonText",
      title: "Hero button text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroBg",
      title: "Hero background image",
      type: "image",
      options: { hotspot: false },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "portfolioTitle",
      title: "Portfolio title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "portfolioBg",
      title: "Portfolio background image",
      type: "image",
      options: { hotspot: false },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "infoTitle",
      title: "Info title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "infoContent",
      title: "Info Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "infoBg",
      title: "Info background image",
      type: "image",
      options: { hotspot: false },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "contactTitle",
      title: "Contact title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "contactSubtitle",
      title: "Contact subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "contactBg",
      title: "Contact background image",
      type: "image",
      options: { hotspot: false },
      validation: (Rule) => Rule.required(),
    },
  ],
};
