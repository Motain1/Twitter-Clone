export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    },
    {
      name: 'blocktweet',
      title:'Block Tweet',
      description:'ADMIN Controls: Toggle if Tweet is deemed inappropriate',
      type:'boolean',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name:'profileImg',
      title:'Profile Image',
      type:'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
    },
  ],
}