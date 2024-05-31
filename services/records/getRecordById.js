import recordData from '../../data/records.json' assert { type: "json" };

const getRecordById = (id) => {
    return recordData.records.find(record => record.id === id);
}

export default getRecordById;