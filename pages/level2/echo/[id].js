// form for echo, it will get patient's id

import React from 'react'

function EchoForm() {
    const [EE_AR, setEE_AR] = useState(-1)
    const [EE_AV_E, setEE_AV_E] = useState(-1)
    const [EE_AV_C, setEE_AV_C] = useState("");
    const [EE_LA, setEE_LA] = useState(-1);
    const [EE_MV_EFS, setEE_MV_EFS] = useState(-1);
    const [EE_MV_EPSS, setEE_MV_EPSS] = useState(-1);
    const [EE_MV_MAC, setEE_MV_MAC] = useState("");
    const [EE_LV_EDD, setEE_LV_EDD] = useState(-1);
    const [EE_LV_ESD, setEE_LV_ESD] = useState(-1);
    const [EE_LV_FSFS, setEE_LV_EE_LV_FSFS] = useState(-1);
    const [EE_LV_IVS, setEE_LV_IVS] = useState(-1);
    const [EE_LV_PW, setEE_LV_PW] = useState(-1);
    const [EE_LV_EFEF, setEE_LV_EFEF] = useState(-1);
    const [EE_RV, setEE_RV] = useState(-1);
    const [EE_PE, setEE_PE] = useState("");
    const [DE_AV_PF, setDE_AV_PF] = useState(-1);
    const [DE_AV_G, setDE_AV_G] = useState(-1);
    const [DE_MV_EWV, setDE_MV_EWV] = useState(-1);
    const [DE_MV_AWV, setDE_MV_AWV] = useState(-1);
    const [DE_MV_EAR, setDE_MV_EAR] = useState(-1);
    const [DE_MV_DT, setDE_MV_DT] = useState(-1);
    const [DE_MV_A, setDE_MV_A] = useState(-1);
    const [DE_MV_R, setDE_MV_R] = useState("");
    const [DE_TV_EWPV, setDE_TV_EWPV] = useState(-1);
    const [DE_TV_AWPV, setDE_TV_AWPV] = useState(-1);
    const [DE_TV_R, setDE_TV_R] = useState("");
    const [DE_TV_VM, setDE_TV_VM] = useState(-1);
    const [DE_TV_RAP, setDE_TV_RAP] = useState(-1);
    const [DE_TV_RVSP, setDE_TV_RVSP] = useState(-1);
    const [DE_PV_PF, setDE_PV_PF] = useState(-1);
    const [DE_PV_R, setDE_PV_R] = useState("");
    const [Findings, setFindings] = useState("");
    const [Assessment, setAssessment] = useState("");

    const data={
        EE_AR:EE_AR,
        EE_AV_E:EE_AV_E,
        EE_AV_C:EE_AV_C,
        EE_LA:EE_LA,
        EE_MV_EFS:EE_MV_EFS,
        EE_MV_EPSS:EE_MV_EPSS,
        EE_MV_MAC:EE_MV_MAC,
        EE_LV_EDD:EE_LV_EDD,
        EE_LV_ESD:EE_LV_ESD,
        EE_LV_FSFS:EE_LV_FSFS,
        EE_LV_IVS:EE_LV_IVS,
        EE_LV_PW:EE_LV_PW,
        EE_LV_EFEF:EE_LV_EFEF,
        EE_RV:EE_RV,
        EE_PE:EE_PE,
        DE_AV_PF:DE_AV_PF,
        DE_AV_G:DE_AV_G,
        DE_MV_EWV:DE_MV_EWV,
        DE_MV_AWV:DE_MV_AWV,
        DE_MV_EAR:DE_MV_EAR,
        DE_MV_DT:DE_MV_DT,
        DE_MV_A:DE_MV_A,
        DE_MV_R:DE_MV_R,
        DE_TV_EWPV:DE_TV_EWPV,
        DE_TV_AWPV:DE_TV_AWPV,
        DE_TV_R:DE_TV_R,
        DE_TV_VM:DE_TV_VM,
        DE_TV_RAP:DE_TV_RAP,
        DE_TV_RVSP:DE_TV_RVSP,
        DE_PV_PF:DE_PV_PF,
        DE_PV_R:DE_PV_R,
        Findings:Findings,
        Assessment:Assessment
    }

    

    
  return (
    <div>EchoForm</div>
  )
}

export default EchoForm