const asyncHandler = (fn: any) =>async(req: any, res: any, next: any) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        const err = error as { status?: number; message?: string };
        res.status(err.status || 500).json({
            success: false,
            error: err.message || "Server Error",
        });
    }

    next();
};


export default asyncHandler;