import {defineArrayMember, defineField, defineType} from 'sanity'
const myDocument = {
  type: "document",
  name: "post",
  fields: [
    defineField({
      name: 'title',
        title: 'title',
        type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'navTitle',
      title: 'navTitle',
      type: 'string'
    }),
    defineField({
      name: 'metaTitle',
      title: 'metaTitle',
      type: 'string'
    }),
    defineField({
      name: 'metaDescription',
      title: 'metaDescription',
      type: 'string'
    }),
    defineField({
      name: "langSwitcher",
      type: "array",
      title: "langSwitcher",
      of: [
        defineArrayMember({
          type: 'string',
          name: 'lang'
        })
      ]
    }),
    defineField({
      name: "dbSwitcher",
      type: "array",
      title: "dbSwitcher",
      of: [
        defineArrayMember({
          type: 'string',
          name: 'db'
        })
      ]
    }),
    defineField({
      name: 'staticLink',
      title: 'staticLink',
      type: 'boolean'
    }),
    defineField({
      name: 'duration',
      title: 'duration',
      type: 'string'
    }),
    defineField({
      name: 'preview',
      title: 'preview',
      type: 'boolean'
    }),
    defineField({
      name: 'earlyaccess',
      title: 'earlyaccess',
      type: 'boolean'
    }),
    defineField({
      name: 'toc',
      title: 'toc',
      type: 'boolean'
    }),
    defineField({
      name: 'hidePage',
      title: 'hidePage',
      type: 'boolean'
    }),
    defineField({
      name: 'tocDepth',
      title: 'tocDepth',
      type: 'number'
    }),
    defineField({
      name: 'codeStyle',
      title: 'codeStyle',
      type: 'boolean'
    }),
    {    
      type: "markdown",
      description: "A Github flavored markdown field with image uploading",
      name: "bio"
    }
  ]
}
export default defineType(myDocument)
