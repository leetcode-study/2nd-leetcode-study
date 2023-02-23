function solution(tickets) {
    var answer = []
    const dfs = (airport, tickets, path) => {
        let newPath = [...path, airport]
        if (tickets.length === 0) {
            answer.push(newPath)
        } else {
            tickets.map((ticket, idx) => {
                if (ticket[0] === airport) {
                    let copiedTickets = [...tickets]
                    const [[from, to]] = copiedTickets.splice(idx, 1)
                    dfs(to, copiedTickets, newPath)
                }
            })
        }
    }
    dfs('ICN', tickets, [])
    return answer.sort()[0]
}