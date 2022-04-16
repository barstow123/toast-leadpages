import { fetchLikedFormSubmissions as fetchLikedFormService, 
    saveLikedFormSubmission as saveLikedFormService,
    onMessage,
    createMockFormSubmission
 } from "./mockServer";

const NUMBER_OF_RETRIES = 3

async function withRetry(callback, args) {

    if (Array.isArray(args) === false) {
        args = [args]
    }

    let retriesAttempted = 0
    return await tryCallback(callback, args)

    async function tryCallback(callback, args) {
        try {
            const response = await callback(...args)
            return response
        } catch(e) {
            console.log('error trying callback:', e)
            if (retriesAttempted < NUMBER_OF_RETRIES) {
                retriesAttempted += 1
                return await tryCallback(callback, args)
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
    return withRetry(saveLikedFormService, formSubmission)
}

export { onMessage, createMockFormSubmission }