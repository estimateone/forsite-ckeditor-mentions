# forsite-ckeditor-mentions

This is an extension on the original [Mention plugin for CKEditor](https://github.com/ckeditor/ckeditor5/tree/master/packages/ckeditor5-mention) specifically for use in [ForSite](https://github.com/estimateone/forsite-core)

# Usage

## Colourised mentions

Mentions in the document will be colourised depending on whether there is a value associated with the selected mention.
You can provide a boolean in the feed for the mentions plugin to control whether there is a value.
e.g.
```javascript
mention: {
        feeds: [
            {
                marker: '@',
                feed: [
                    { id: '@swarley', userId: '1', name: 'Barney Stinson', isPopulated: true},
                    { id: '@lilypad', userId: '2', name: 'Lily Aldrin', isPopulated: false},
                    { id: '@marshmallow', userId: '3', name: 'Marshall Eriksen', isPopulated: true},
                    { id: '@rsparkles', userId: '4', name: 'Robin Scherbatsky', isPopulated: false},
                    { id: '@tdog', userId: '5', name: 'Ted Mosby', isPopulated: true},
                ],
                minimumCharacters: 1
            }
        ]
    }
```
