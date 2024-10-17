import Hero from './Hero';
import Cardkegiatan from './Cardkegiatan';
import Cardkelas from './Cardkelas';
import kegiatan1 from './../component/assets/bazar2.jpg';
import kegiatan2 from './../component/assets/pramuka.jpg';
import kegiatan3 from './../component/assets/bazar1.jpg';
import kelas1 from './../component/assets/sekolah4.jpg';
import kelas2 from './../component/assets/sekolah4.jpg';
import kelas3 from './../component/assets/sekolah4.jpg';
import kelas4 from './../component/assets/sekolah4.jpg';
import kelas5 from './../component/assets/sekolah4.jpg';
import kelas6 from './../component/assets/sekolah4.jpg';

const Maincontent = ()=> {
    return(
        <div>
            <Hero/>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan Sekolah</h1>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardkegiatan image={kegiatan1} kegiatan="Bazar Sekolah" description="bazar sekolah yang diadakan oleh sekolah"/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardkegiatan image={kegiatan2} kegiatan="Ekstra Kurikuler" description="ekstra kurikuler yang diadakan oleh sekolah"/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardkegiatan image={kegiatan3} kegiatan="Bazar Sekolah" description="bazar sekolah yang diadakan oleh sekolah"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Nama Kelas</h1>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkelas image={kelas1} description="Kelas 1"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkelas image={kelas2} description="Kelas 2"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkelas image={kelas3} description="Kelas 3"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkelas image={kelas4} description="Kelas 4"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkelas image={kelas5} description="Kelas 5"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkelas image={kelas6} description="Kelas 6"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontent;