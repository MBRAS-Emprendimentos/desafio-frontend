import MainView from "./view";
import MainViewModel from "./viewModel";

export default function Main(){
    const {socialNetwork} = MainViewModel()
    return <MainView socialNetWork={socialNetwork} />
}