export interface socialNetwork {
    socialNetWork: Array<{value: string, label:string}>
}

export default function MainViewModel() {

  const socialNetwork = [
    {
      value:
        "https://www.linkedin.com/company/mbras-solu%C3%A7%C3%B5es-imobili%C3%A1rias/",
      label: "Linkedin",
    },
    {
      value: "https://www.instagram.com/mbrasempreendimentos/",
      label: "Instagram",
    },
    {
      value: "https://x.com/mbrasimoveis",
      label: "X",
    },
    {
      value:
        "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-MBRAS-EI_IE5440702.13,18.htm",
      label: "Glassdoor",
    },
    {
      value: "https://www.youtube.com/@mbrasempreendimentos",
      label: "Youtube",
    },
  ]; 

  return {socialNetwork}
}
