import React from 'react';

export function AppFooter() {
    return (
        <div className="footer mt-auto py-3 bg-primary">
            <span >&copy; {new Date().getFullYear()} made by Aleksandr Dudkov</span>
        </div>
    );
}

