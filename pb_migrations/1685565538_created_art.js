migrate((db) => {
  const collection = new Collection({
    "id": "zd5ovcdvf0ygfy2",
    "created": "2023-05-31 20:38:58.219Z",
    "updated": "2023-05-31 20:38:58.219Z",
    "name": "art",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k3jawgyr",
        "name": "prompt",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sokgbdch",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "jftmectm",
        "name": "url",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zd5ovcdvf0ygfy2");

  return dao.deleteCollection(collection);
})
