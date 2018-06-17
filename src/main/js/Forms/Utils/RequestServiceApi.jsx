
/**
 * Generic Asynchronous calls defined for application.
 *
 * @author Rahul Deshmukh
 * @version 1.0
 * @since 17.06, 2018
 */
class RequestServiceApi {

    /**
     * This method used to fetch a resource from server side.
     *
     * @param url
     * @returns {Promise<*>}
     */
    async getRequest(url) {
        let data = await (await (fetch(url)
                .then(res => {
                    return res.json()
                })
                .catch(err => {
                    console.log('Error while fetching data from API : ', err)
                })
        ));
        return data
    }

    /**
     * This method use fetch api to save data to server side.
     *
     * @param url
     * @returns {Promise<*>}
     */
    async fetchSendObject(url, inputObject){
        let data = await (await (fetch(url, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(inputObject)
            })
                .then(res => {
                    return res.json()
                })
                .catch(err => {
                    console.log('Error while fetching data from API : ', err)
                })
        ));
        return data;
    }
}

export default new RequestServiceApi();