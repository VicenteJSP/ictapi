const validateAllProperties = (employed) => {
    const { employedName, date, punchIn, punchOut } = employed;
    let errorList = [];
    if(!employedName) errorList.push('employedName')
    if(!date) errorList.push('date')
    if(!punchIn) errorList.push('punchIn')
    if(!punchOut) errorList.push('punchOut')
    if (errorList.length > 0) throw new Error(`Incomplete data: ${errorList.join(', ')}`);
    return true;
};

export { validateAllProperties };