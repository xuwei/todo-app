const ArchiveFilter = {
    LAST_7_DAYS : '7', 
    LAST_14_DAYS : '14',
    LAST_21_DAYS : '21',
    CUSTOM: "custom"
}

// represent 1 section of archieve results
class TaskArchieveModel {
    constructor (order, dateString, tasks) {
        this.order = order
        this.dateString = dateString
        this.tasks = [...tasks]
    }
}

export default TaskArchieveModel
export { ArchiveFilter }