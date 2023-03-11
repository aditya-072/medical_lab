import React from 'react'

function Report({ patientsArray }) {
  return (
    <div>
        <h1> Echo Report </h1>
        <div class="p-5">
            <table class="table">
                 {/* <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                        <th scope="row">Procedure Done By</th>
                        <td>Senior Resident</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Echo Window</th>
                        <td>Good</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">MITRAL VALVE</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">AML</th>
                        <td>Normal</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">PML</th>
                        <td>Normal</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Doppler(cm/s)</th>
                        <td>E(cm/s)</td>
                        <td>A(cm/s)</td>
                        <td>DT</td>
                        <td>E/A</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>75</td>
                        <td>107</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Diastolic Function</th>
                        <td>Grade 1 Dysfunction</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">MITRAL STENOSIS</th>
                        <td>Absent</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">MITRAL REGURGITATION</th>
                        <td>Mild</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">A4C (cmsq)</th>
                        <td>LAA</td>
                        <td>Jet Area</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>13</td>
                        <td>3.0</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">TRISCUPID VALVE</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Morphology</th>
                        <td>Normal</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Tricuspid Stenosis</th>
                        <td>Absent</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Tricuspid Regurgitation</th>
                        <td>Mild</td>
                        <td>RVSP(mmHg)=RAP+</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td>21</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Pulmonary Hypertension</th>
                        <td>None</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">AORTIC VALVE</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Morphology</th>
                        <td>Normal</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Doppler</th>
                        <td>Aortic peak systolic velocity(m/sec)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>1.1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Aortic Stenosis</th>
                        <td>Absent</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Aortic Regurgitation</th>
                        <td>Absent</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">PULMONARY VALVE</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Morphology</th>
                        <td>Normal</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Pulmonary Stenosis</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Pulmonary Regurgitation</th>
                        <td>Absent</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">MEASUREMENTS</th>
                        <td>VALUES</td>
                        <td>NORMAL Val.</td>
                        <td>MEASUREMENTS</td>
                        <td>VALUES</td>
                        <td>NORMAL Val.</td>
                    </tr>
                    <tr>
                        <th scope="row">IVsd</th>
                        <td>8</td>
                        <td>(6-10)mm</td>
                        <td>Aorta</td>
                        <td>28</td>
                        <td>(20-37)mm</td>
                    </tr>
                    <tr>
                        <th scope="row">LVIDd</th>
                        <td>64</td>
                        <td>(36-52)mm</td>
                        <td>LA</td>
                        <td>30</td>
                        <td>(19-40)mm</td>
                    </tr>
                    <tr>
                        <th scope="row">LVPWd</th>
                        <td>9</td>
                        <td>(7-11)mm</td>
                        <td>RVIDd</td>
                        <td></td>
                        <td>(4-14)mm</td>
                    </tr>
                    <tr>
                        <th scope="row">IVss</th>
                        <td>10</td>
                        <td>(7-12)mm</td>
                        <td>RV Free wall</td>
                        <td></td>
                        <td>(upto 5 mm)</td>
                    </tr>
                    <tr>
                        <th scope="row">LVIDs</th>
                        <td>52</td>
                        <td></td>
                        <td>FS</td>
                        <td></td>
                        <td>(34-44)mm</td>
                    </tr>
                    <tr>
                        <th scope="row">LVPWs</th>
                        <td>10</td>
                        <td>(8-12)mm</td>
                        <td>TAPSE</td>
                        <td></td>
                        <td>(&gt;17)mm</td>
                    </tr>
                    <tr>
                        <th scope="row">EF</th>
                        <td>36</td>
                        <td>(&gt;55%)</td>
                        <td>Visual EF</td>
                        <td>35-40%</td>
                        <td>(&gt;55%)</td>
                    </tr>
                    <tr>
                        <th scope="row">IVS Motion</th>
                        <td>Normal</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">CHAMBERS</th>
                        <td>LA</td>
                        <td>LV</td>
                        <td>RA</td>
                        <td>RV</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Normal</td>
                        <td>Enlarged</td>
                        <td>Normal</td>
                        <td>Normal</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">RWMA</th>
                        <td>Hypokinesia</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">BASAL LV</th>
                        <td>Inferoseptal,Inferior,Inferolateral</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">MID LV</th>
                        <td>Inferoseptal,Inferior,Inferolateral</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">APICAL LV</th>
                        <td>Inferior</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">LV APEX</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Remarks</th>
                        <td>GLOBAL HYPOKINESIA</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">IMPRESSION</th>
                        <td>CAD RWMA IN RCA Tx</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>LVDD I,</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>MILD MR, MILD TR</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>MOD LV SYSTOLIC DYSFUNCTION</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>LVEF- 35-40%</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">PLAN</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export async function getServerSideProps(context) {
    // const someQueryParam = query.someQueryParam;
    // const {query}=req.query;
    // console.log(query);
    const { query } = context;
    // const {res}=context;
    // console.log(query);
    const { host } = context.req.headers;
    // console.log(host)
    // redirect to some another page if update request does on contain the id of the patient
    if (!query["id"]) {
        return {
            redirect: {
                destination: `http://${host}/echo`,
                permanent: false,
            },
        };
    }
    // console.log(query["id"])
    // Fetch data using the query parameter
    // const data = await fetchData(someQueryParam);
    // const res=await fetch(`http://${host}/api/patients/query?id=query["id"]`);
    // const res=await fetch(`http://${host}/api/patients/query["id"]`);
    // fetch patient data from databse by id
    const response = await axios.get(`http://${host}/api/patients/query?id=${query["id"]}`);

    // console.log(response.data.data);
    const patientsArray = response.data.data.patientsArray;
    // console.log(patientsArray);

    // Return the data as props
    return { props: { patientsArray } };
}
export default Report