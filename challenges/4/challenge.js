/*
 * Normalização de estruturas
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que realize a
 * normalização da estrutura representada pela variável input de
 * forma que o retorno seja compatível com a variável output
 *
 */

/*
 * [INPUT] Object
 * {
 *   "id": "6197b77e-3942-11ea-a137-2e728ce88125",
 *   "user": {
 *     "id": "6197ba94",
 *     "name": "Laura"
 *   },
 *   "reports": [
 *     {
 *       "id": "51ddf1a9",
 *       "result": {
 *         "document": "356.4325-10",
 *         "status": "em análise",
 *       }
 *     }
 *   ]
 * }
 *
 * [OUTPUT] Object
 *  {
 *   "results": {
 *     "6197b77e-3942-11ea-a137-2e728ce88125": {
 *       id: "6197b77e-3942-11ea-a137-2e728ce88125",
 *       user: "6197ba94",
 *       reports: ["51ddf1a9"]
 *     }
 *   },
 *   "users": {
 *     "6197ba94": { "id": "6197ba94", "name": "Laura" }
 *   },
 *   "reports": {
 *     "51ddf1a9": {
 *        "id": "51ddf1a9",
 *        "user": "6197ba94",
 *        "document": "356.4325-10",
 *        "status": "em análise",
 *      }
 *    }
 *  }
 */


const normalizeData = unormalized => {
    return({
        "results": results(unormalized),
        "users": user(unormalized.user),
        "reports": reports(unormalized)
    })
}

const results = results_object => {
    let normalized_results = {}

    normalized_results[results_object.id] = {}
    normalized_results[results_object.id]["id"] = results_object.id
    normalized_results[results_object.id]["user"] = results_object.user.id
    normalized_results[results_object.id]["reports"] = results_object.reports.map(element => element.id )

    return normalized_results
}

const user = user_object => {
    let normalized_user = {}

    normalized_user[user_object.id] = {}
    normalized_user[user_object.id]["id"] = user_object.id
    normalized_user[user_object.id]["name"] = user_object.name

    return normalized_user
}

const reports = result => {
    let normalized_reports = {}

    result.reports.forEach((report, _) => {
        normalized_reports[report.id] = {}
        normalized_reports[report.id]["id"] = report.id
        normalized_reports[report.id]["user"] = result.user.id
        normalized_reports[report.id]["document"] = report.result.document
        normalized_reports[report.id]["status"] = report.result.status
    })

    return normalized_reports
}

module.exports = normalizeData
