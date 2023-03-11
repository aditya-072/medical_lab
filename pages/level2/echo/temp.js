import axios from 'axios'
import React from 'react'

function Temp() {
    const [PDB, setPDB] = useState("")
    const [EW, setEW] = useState("")
    const [MV_AML, setMV_AML] = useState("")
    const [MV_PML, setMV_PML] = useState("")
    const [MV_D_E, setMV_D_E] = useState("")
    const [MV_D_A, setMV_D_A] = useState("")
    const [MV_D_DT, setMV_D_DT] = useState("")
    const [MV_D_EA, setMV_D_EA] = useState("")
    const [MV_DF, setMV_DF] = useState("")
    const [MV_MS, setMV_MS] = useState("")
    const [MV_MR, setMV_MR] = useState("")
    const [MV_A4C_LAA, setMV_A4C_LAA] = useState("")
    const [MV_A4C_JA, setMV_A4C_JA] = useState("")
    const [TV_M, setTV_M] = useState("")
    const [TV_TS, setTV_TS] = useState("")
    const [TV_TR, setTV_TR] = useState("")
    const [TV_RVSP, setTV_RVSP] = useState("")
    const [TV_PH, setTV_PH] = useState("")
    const [AV_M, setAV_M] = useState("")
    const [AV_D_APSV, setAV_D_APSV] = useState("")
    const [AV_AS, setAV_AS] = useState("")
    const [AV_AR, setAV_AR] = useState("")
    const [PV_M, setPV_M] = useState("")
    const [PV_PS, setPV_PS] = useState("")
    const [PV_PR, setPV_PR] = useState("")
    const [IVsd, setIVsd] = useState("")
    const [LVIDd, setLVIDd] = useState("")
    const [LVPWd, setLVPWd] = useState("")
    const [IVss, setIVss] = useState("")
    const [LVIDs, setLVIDs] = useState("")
    const [LVPWs, setLVPWs] = useState("")
    const [EF, setEF] = useState("")
    const [Aorta, setAorta] = useState("")
    const [LA, setLA] = useState("")
    const [RVIDd, setRVIDd] = useState("")
    const [RVFW, setRVFW] = useState("")
    const [FS, setFS] = useState("")
    const [TAPSE, setTAPSE] = useState("")
    const [VEF, setVEF] = useState("")
    const [IVSM, setIVSM] = useState("")
    const [C_LA, setC_LA] = useState("")
    const [C_LV, setC_LV] = useState("")
    const [C_RA, setC_RA] = useState("")
    const [C_RV, setC_RV] = useState("")
    const [RWMA, setRWMA] = useState("")
    const [BASALLV, setBASALLV] = useState("")
    const [MIDLV, setMIDLV] = useState("")
    const [APICALLV, setAPICALLV] = useState("")
    const [LVAPEX, setLVAPEX] = useState("")
    const [Remarks, setRemarks] = useState("")

    const data={
        PDB:PDB,
        EW:EW,
        MV_AML:MV_AML,
        MV_PML:MV_PML,
        MV_D_E:MV_D_E,
        MV_D_A:MV_D_A,
        MV_D_DT:MV_D_DT,
        MV_D_EA:MV_D_EA,
        MV_DF:MV_DF,
        MV_MS:MV_MS,
        MV_MR:MV_MR,
        MV_A4C_LAA:MV_A4C_LAA,
        MV_A4C_JA:MV_A4C_JA,
        TV_M:TV_M,
        TV_TS:TV_TS,
        TV_TR:TV_TR,
        TV_RVSP:TV_RVSP,
        TV_PH:TV_PH,
        AV_M:AV_M,
        AV_D_APSV:AV_D_APSV,
        AV_AS:AV_AS,
        AV_AR:AV_AR,
        PV_M:PV_M,
        PV_PS:PV_PS,
        PV_PR:PV_PR,
        IVsd:IVsd,
        LVIDd:LVIDd,
        LVPWd:LVPWd,
        IVss:IVss,
        LVIDs:LVIDs,
        LVPWs:LVPWs,
        EF:EF,
        Aorta:Aorta,
        LA:LA,
        RVIDd:RVIDd,
        RVFW:RVFW,
        FS:FS,
        TAPSE:TAPSE,
        VEF:VEF,
        IVSM:IVSM,
        C_LA:C_LA,
        C_LV:C_LV,
        C_RA:C_RA,
        C_RV:C_RV,
        RWMA:RWMA,
        BASALLV:BASALLV,
        MIDLV:MIDLV,
        APICALLV:APICALLV,
        LVAPEX:LVAPEX,
        Remarks:Remarks
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const {data}=axios.post(`/api/echo`, data);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <fieldset>
            <label for="PDB">Procedure Done By</label>
            <input type="text" name="PDB" onchange={(e)=>setPDB(e.target.value)}  /><br/><br/>
            <label for="">Echo Window</label>
            <input type="text" name="EW" onchange={(e)=>setEW(e.target.value)} />
        </fieldset>
        <fieldset>
            <legend>MITRAL VALVE</legend>
            <label for="MV_AML">AML</label>
            <select name="MV_AML" id="MV_AML" onchange={(e)=>setMV_AML(e.target.value)}>
                <option value="Normal">Normal</option>
            </select><br/><br/>
            <label for="MV_PML">PML</label>
            <select name="MV_PML" id="MV_PML" onchange={(e)=>setMV_PML(e.target.value)}>
                <option value="Normal">Normal</option>
            </select><br/><br/>
            <fieldset>
                <legend>Doppler(cm/s) </legend>
                <label for="MV_D_E">E(cm/s)</label>
                <input type="text" name="MV_D_E" id="MV_D_E" onchange={(e)=>setMV_D_E(e.target.value)} /><br/><br/>
                <label for="MV_D_A">A(cm/s)</label>
                <input type="text" name="MV_D_A" id="MV_D_A" onchange={(e)=>setMV_D_A(e.target.value)} /><br/><br/>
                <label for="MV_D_DT">DT</label>
                <input type="text" name="MV_D_DT" id="MV_D_DT" onchange={(e)=>setMV_D_DT(e.target.value)} /><br/><br/>
                <label for="MV_D_EA">E/A</label>
                <input type="text" name="MV_D_EA" id="MV_D_EA" onchange={(e)=>setMV_D_EA(e.target.value)} /><br/><br/>
            </fieldset>
            <label for="MV_DF">Diastolic Function</label>
            <input type="text" name="MV_DF" id="MV_DF" onchange={(e)=>setMV_DF(e.target.value)} /><br/><br/>
            <label for="MV_MS">MITRAL STENOSIS</label>
            <input type="text" name="MV_MS" id="MV_MS" onchange={(e)=>setMV_MS(e.target.value)} /><br/><br/>
            <label for="MV_MR">MITRAL REGURGITATION</label>
            <select name="MV_MR" id="MV_MR" onchange={(e)=>setMV_MR(e.target.value)}>
                <option value="Mild">Mild</option>
            </select><br/><br/>
            <fieldset>
                <legend>A4C (cmsq) </legend>
                <label for="MV_A4C_LAA">LAA</label>
                <input type="text" name="MV_A4C_LAA" id="MV_A4C_LAA" onchange={(e)=>setMV_A4C_LAA(e.target.value)} /><br/><br/>
                <label for="MV_A4C_JA">Jet Area</label>
                <input type="text" name="MV_A4C_JA" id="MV_A4C_JA" onchange={(e)=>setMV_A4C_JA(e.target.value)} />
            </fieldset>

        </fieldset>
        <fieldset>
            <legend>TRISCUPID VALVE</legend>
            <label for="TV_M">Morphology</label>
            <input type="text" name="TV_M" id="TV_M" onchange={(e)=>setTV_M(e.target.value)} /><br/><br/>
            <label for="TV_TS">Tricuspid Stenosis</label>
            <input type="text" name="TV_TS" id="TV_TS" onchange={(e)=>setTV_TS(e.target.value)} /><br/><br/>
            <label for="TV_TR">Tricuspid Regurgitation</label>
            <select name="TV_TR" id="TV_TR" onchange={(e)=>setTV_TR(e.target.value)}>
                <option value="Mild">Mild</option>
            </select><br/><br/>
            <label for="TV_RVSP">RVSP(mmHg)=RAP+</label>
            <input type="text" name="TV_RVSP" id="TV_RVSP" onchange={(e)=>setTV_RVSP(e.target.value)} /><br/><br/>
            <label for="TV_PH">Pulmonary Hypertension</label>
            <input type="text" name="TV_PH" id="TV_PH" onchange={(e)=>setTV_PH(e.target.value)} /><br/><br/>
        </fieldset>
        <fieldset>
            <legend>AORTIC VALVE</legend>
            <label for="AV_M">Morphology</label>
            <input type="text" name="AV_M" id="AV_M" onchange={(e)=>setAV_M(e.target.value)} /><br/><br/>
            <fieldset>
                <legend>Doppler</legend>
                <label for="AV_D_APSV">Aortic peak systolic velocity(m/sec)</label>
                <input type="text" name="AV_D_APSV" id="AV_D_APSV" onchange={(e)=>setAV_D_APSV(e.target.value)} /><br/><br/>

            </fieldset>
            <label for="AV_AS">Aortic Stenosis</label>
            <input type="text" name="AV_AS" id="AV_AS" setAV_AS /><br/><br/>
            <label for="AV_AR">Aortic Regurgitation</label>
            <input type="text" name="AV_AR" id="AV_AR" onchange={(e)=>setAV_AR(e.target.value)} /><br/><br/>
        </fieldset>
        <fieldset>
            <legend>PULMONARY VALVE</legend>
            <label for="PV_M">Morphology</label>
            <input type="text" name="PV_M" id="PV_M" onchange={(e)=>setPV_M(e.target.value)} /><br/><br/>
            <label for="PV_PS">Pulmonary Stenosis</label>
            <input type="text" name="PV_PS" id="PV_PS" onchange={(e)=>setPV_PS(e.target.value)} /><br/><br/>
            <label for="PV_PR">Pulmonary Regurgitation</label>
            <input type="text" name="PV_PR" id="PV_PR" onchange={(e)=>setPV_PR(e.target.value)} /><br/><br/>
        </fieldset>
        <fieldset>
            <label for="IVsd">IVsd</label>
            <input type="text" name="IVsd" id="IVsd" onchange={(e)=>setIVsd(e.target.value)} /><br/><br/>
            <label for="LVIDd">LVIDd</label>
            <input type="text" name="LVIDd" id="LVIDd" onchange={(e)=>setLVIDd(e.target.value)} /><br/><br/>
            <label for="LVPWd">LVPWd</label>
            <input type="text" name="LVPWd" id="LVPWd" onchange={(e)=>setLVPWd(e.target.value)} /><br/><br/>
            <label for="IVss">IVss</label>
            <input type="text" name="IVss" id="IVss" onchange={(e)=>setIVss(e.target.value)} /><br/><br/>
            <label for="LVIDs">LVIDs</label>
            <input type="text" name="LVIDs" id="LVIDs" onchange={(e)=>setLVIDs(e.target.value)} /><br/><br/>
            <label for="LVPWs">LVPWs</label>
            <input type="text" name="LVPWs" id="LVPWs" onchange={(e)=>setLVPWs(e.target.value)} /><br/><br/>
            <label for="EF">EF</label>
            <input type="text" name="EF" id="EF" onchange={(e)=>setEF(e.target.value)} /><br/><br/>
            <label for="Aorta">Aorta</label>
            <input type="text" name="Aorta" id="Aorta" onchange={(e)=>setAorta(e.target.value)} /><br/><br/>
            <label for="LA">LA</label>
            <input type="text" name="LA" id="LA" onchange={(e)=>setLA(e.target.value)} /><br/><br/>
            <label for="RVIDd">RVIDd</label>
            <input type="text" name="RVIDd" id="RVIDd" onchange={(e)=>setRVIDd(e.target.value)} /><br/><br/>
            <label for="RVFW">RVFW</label>
            <input type="text" name="RVFW" id="RVFW" onchange={(e)=>setRVFW(e.target.value)} /><br/><br/>
            <label for="FS">FS</label>
            <input type="text" name="FS" id="FS" onchange={(e)=>setFS(e.target.value)} /><br/><br/>
            <label for="TAPSE">TAPSE</label>
            <input type="text" name="TAPSE" id="TAPSE" onchange={(e)=>setTAPSE(e.target.value)} /><br/><br/>
            <label for="VEF">VEF</label>
            <input type="text" name="VEF" id="VEF" onchange={(e)=>setVEF(e.target.value)} /><br/><br/>
        </fieldset>
        <fieldset>

            <label for="IVSM">IVS Motion </label>
            <input type="text" name="IVSM" id="IVSM" onchange={(e)=>setIVSM(e.target.value)} /><br/><br/>
            <fieldset>
                <legend>CHAMBERS</legend>
                <label for="C_LA">LA</label>
                <input type="text" name="C_LA" id="C_LA" onchange={(e)=>setC_LA(e.target.value)} /><br/><br/>
                <label for="C_LV">LV</label>
                <input type="text" name="C_LV" id="C_LV" onchange={(e)=>setC_LV(e.target.value)} /><br/><br/>
                <label for="C_RA">RA</label>
                <input type="text" name="C_RA" id="C_RA" onchange={(e)=>setC_RA(e.target.value)} /><br/><br/>
                <label for="C_RV">RV</label>
                <input type="text" name="C_RV" id="C_RV" onchange={(e)=>setC_RV(e.target.value)} /><br/><br/>
            </fieldset>

            <label for="RWMA">RWMA</label>
            <input type="text" name="RWMA" id="RWMA" onchange={(e)=>setRWMA(e.target.value)} /><br/><br/>
            <label for="BASALLV">BASAL LV</label>
            <input type="text" name="BASALLV" id="BASALLV" onchange={(e)=>setBASALLV(e.target.value)} /><br/><br/>
            <label for="MIDLV">MID LV</label>
            <input type="text" name="MIDLV" id="MIDLV" onchange={(e)=>setMIDLV(e.target.value)} /><br/><br/>
            <label for="APICALLV">APICAL LV</label>
            <input type="text" name="APICALLV" id="APICALLV" onchange={(e)=>setAPICALLV(e.target.value)} /><br/><br/>
            <label for="LVAPEX">LV APEX</label>
            <input type="text" name="LVAPEX" id="LVAPEX" onchange={(e)=>setLVAPEX(e.target.value)} /><br/><br/>
            <label for="Remarks">Remarks</label>
            <input type="text" name="Remarks" id="Remarks" onchange={(e)=>setRemarks(e.target.value)} /><br/><br/>

        </fieldset>
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Temp