const changeDate = (state = { startDate: new Date(), endDate: new Date(), randomData: [200, 185, 590, 621, 250, 400, 95] }, action) => {
    console.log(action);
    switch (action.type) {
        case "YESTERDAY":
            var today = new Date();
            var endofDate = new Date();
            endofDate.setDate(endofDate.getDate() - 1);
            return {
                ...state,
                startDate: endofDate,
                endDate: today,
                randomData: [...Array(7)].map(e => ~~(Math.random() * 200) + 40),

            }
        case "TODAY":
            today = new Date();
            return {
                ...state,
                startDate: today,
                endDate: today,
                randomData: [...Array(7)].map(e => ~~(Math.random() * 200) + 40),

            }
        case "WEEKAGO":
            today = new Date();
            endofDate = new Date();
            endofDate.setDate(endofDate.getDate() - 7);
            return {
                ...state,
                startDate: endofDate,
                endDate: today,
                randomData: [...Array(7)].map(e => ~~(Math.random() * 200) + 40),

            }
        case "MONTHAGO":
            today = new Date();
            endofDate = new Date();
            endofDate.setDate(endofDate.getDate() - 30);
            return {
                ...state,
                startDate: endofDate,
                endDate: today,
                randomData: [...Array(7)].map(e => ~~(Math.random() * 200) + 40),

            }


        default:
            return state
    }
}

export default changeDate