export const copy = async (input: string) => {
    await navigator.clipboard.writeText(input)
}