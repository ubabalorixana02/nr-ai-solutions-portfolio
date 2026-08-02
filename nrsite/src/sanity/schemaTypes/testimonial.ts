import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "⏳ Pending review", value: "pending" },
          { title: "✅ Approved (visible on site)", value: "approved" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "review",
      title: "Review",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().min(10).max(1000),
    }),
    defineField({
      name: "rating",
      title: "Star Rating",
      type: "number",
      options: {
        list: [1, 2, 3, 4, 5],
      },
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
    }),
  ],
  preview: {
    select: { title: "clientName", subtitle: "company", status: "status" },
    prepare({ title, subtitle, status }) {
      const flag = status === "approved" ? "✅" : "⏳";
      return { title: `${flag} ${title}`, subtitle };
    },
  },
});
