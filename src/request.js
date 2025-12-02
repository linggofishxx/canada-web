import axios from 'axios';
export const queryUnitsByType = async (type) => {
    const res = await axios(`/api/units/type/${type}`);
    return res;
};
export const queryUnitQuestions = async (unitId) => {
    const res = await axios(`/api/questions/unit/${unitId}`);
    return res;
};
