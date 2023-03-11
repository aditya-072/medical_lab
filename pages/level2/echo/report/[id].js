import React from 'react'
import { useRouter } from 'next/router'

// generate patient's echo report
function Report() {
    const router = useRouter();
    const { id } = router.query;

    // fetch the report data from database and display
    return (
        <div>Report</div>
    )
}

export default Report