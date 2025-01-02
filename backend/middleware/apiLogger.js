const apiLogger = (req, res, next) => {
    // Record start time
    const start = Date.now();
    
    // Store the original end function
    const originalEnd = res.end;
    
    // Override end function
    res.end = function() {
        // Calculate time taken
        const timeTaken = Date.now() - start;
        
        // Log the API details
        console.log(
            `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${res.statusCode} (${timeTaken}ms)`
        );
        
        // Call original end function
        originalEnd.apply(res, arguments);
    };
    
    next();
};

module.exports = apiLogger;
