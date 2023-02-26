export async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice', {
        method: "GET"
    })
    return await response.json();
}