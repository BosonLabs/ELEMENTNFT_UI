import React from 'react';
import Layout from './Layout';


function HomePage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Layout>
            <main className="dashboard-view dashboard-view-left">
                
            </main>
        </Layout>
    );
}

export default HomePage;