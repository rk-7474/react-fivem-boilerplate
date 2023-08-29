export const useNuiEvent = (name, action) => {
    const eventListener = (event) => {
        const data = event.data;
        if (data.name === name) {
            action(data.data)
        }
    };

    window.addEventListener("message", eventListener);
}

export async function fetchNui(eventName, data) {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    };
    const resourceName = GetParentResourceName()

    const resp = await fetch(`https://${resourceName}/${eventName}`, options);

    const respFormatted = await resp.json()

    return respFormatted
}