async function getData(name) {
    const url = "https://api.github.com/users/" + name
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/vnd.github+json",
            "Authorization": "dev_key",
        }
    })

    return await response.json()
}

export default getData