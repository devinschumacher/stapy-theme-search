const books = [
{% item.book delimiter:"," ~ SELECT ITEMS WHERE "book" in tags ORDER BY isbn asc %}
];