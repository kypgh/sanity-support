import {defineConfig, definePlugin} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {table} from '@sanity/table'
import {crossDatasetDuplicator} from '@sanity/cross-dataset-duplicator'
import {documentInternationalization} from '@sanity/document-internationalization'

const sharedConfig = definePlugin({
  name: 'sharedConfig',
  plugins: [
    deskTool(),
    visionTool(),
    table(),
    documentInternationalization({
      supportedLanguages: [
        {
          id: 'de',
          title: 'Deutsch',
        },
        {
          id: 'en',
          title: 'English',
        },
        {
          id: 'es',
          title: 'Español',
        },
        {
          id: 'ms',
          title: 'Malay',
        },
        {
          id: 'pt',
          title: 'Português',
        },
        {
          id: 'ar',
          title: 'العربية',
        },
        {
          id: 'cz',
          title: 'Česky',
        },
        {
          id: 'fr',
          title: 'Français',
        },
        {
          id: 'hi',
          title: 'ɦɪndi',
        },
        {
          id: 'id',
          title: 'Indonesia',
        },
        {
          id: 'it',
          title: 'Italiano',
        },
        {
          id: 'hu',
          title: 'Magyar',
        },
        {
          id: 'pl',
          title: 'Polski',
        },
        {
          id: 'th',
          title: 'ภาษาไทย',
        },
        {
          id: 'vi',
          title: 'Tiếng Việt',
        },
        {
          id: 'zh-hans',
          title: '中文',
        },
        {
          id: 'zh-tw',
          title: '中文繁體',
        },
        {
          id: 'tr',
          title: 'Turkish',
        },
        {
          id: 'nl',
          title: 'Nederlands',
        },
        {
          id: 'el',
          title: 'Ελληνικά',
        },
      ],
      schemaTypes: ['categories'],
      bulkPublish: true,
    }),
    crossDatasetDuplicator({
      // Required settings to show document action
      types: ['faq'],
      // Optional settings
      tool: true,

      follow: ['inbound'],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})

export default defineConfig([
  {
    name: 'staging',
    basePath: '/studio/staging',
    projectId: 'f4z1cxal',
    dataset: 'staging',
    title: 'Staging',
    plugins: [sharedConfig()],
  },
  {
    name: 'Production',
    basePath: '/studio/production',
    projectId: 'f4z1cxal',
    dataset: 'production',
    title: 'Production',
    plugins: [sharedConfig()],
  },
])
