async function fetchAPI(query, { variables } = {}) {
    const res = await fetch(`${process.env.STRAPI_API_URL}/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error("Failed to fetch API");
    }

    return json.data;
}

export async function getTechnologies(preview) {
    const data = await fetchAPI(
        `
        query {
            technologies (sort: "name:asc", pagination: { pageSize: 100 }) {
              data {
              id
              attributes {
                  name,
                Colour
              }
            }
          }
        }
    `,
        {
            variables: {
                where: {
                    ...(preview ? {} : { status: "published" }),
                },
            },
        }
    );

    return data?.technologies;
}
