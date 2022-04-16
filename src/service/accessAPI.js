import { fetchLikedFormSubmissions as fetchLikedFormService, 
    saveLikedFormSubmission as saveLikedFormService,
    onMessage,
    createMockFormSubmission
 } from "./mockServer";

const NUMBER_OF_RETRIES = 3

async function withRetry(callback) {
    let retriesAttempted = 0
    return await tryCallback(callback)

    async function tryCallback(callback) {
        try {
            const response = await callback()
            return response
        } catch(e) {
            if (retriesAttempted < NUMBER_OF_RETRIES) {
                retriesAttempted++
                return await tryCallback(callback)
            } else {
                return e
            }
        }
    }
}

export function fetchLikedFormSubmissions() {
    return withRetry(fetchLikedFormService)
}

export function saveLikedFormSubmission(formSubmission) {
    return withRetry(saveLikedFormService(formSubmission))
}

export { onMessage, createMockFormSubmission }