## About

This is a personal project, created to make data and stats about the council meetings of the municipality of Ladispoli more accessible both materially and visually.

Developed with NextJS-ChakraUI (frontend) and Airtable (backend).

---

---

## Open Data

Here you can find open data tables I made for this app thanks to the backend service Airtable:

https://airtable.com/shrVgrkuiUfc6G5K8

Everyone is free to use this data for other applications, just:

1. Create an Airtable account and enter your API key in an `/.env.local` file in the project source:

```
AIRTABLE_API_KEY = yourKey
```

2. Make a copy of the base from the link above and start using data in your app.

I created some functions to retrieve data from tables, you can find them into functions folder.

---

---

## License

Code is public so the model can be used for any other municipality, by uploading the data for that municipality or using APIs if they already exist.

This project is licensed under the MIT license. See the [LICENSE](./LICENSE.md) file for more info.
