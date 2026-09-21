function recCounter(num) {
    if (num <= 0) {
    return;
}
    console.log (num);
    recCounter (num - 1);
}


recCounter(5);