function devLog(category, message, data = null) {
    const timestamp = new Date().toLocaleTimeString();

    if (data !== null) {
        console.log(`[${timestamp}] [${category}] ${message}`, data);
    } else {
        console.log(`[${timestamp}] [${category}] ${message}`);
    }
}