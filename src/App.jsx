import DataImage from './data'
import { listTools, listProyek} from './data'


function App() {

  return (
    <>
     {/* <!-- Hero --> */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className='animate__animated animate__fadeInUp animate__delay-1s'>
          <div className='flex items-center gap-3 mb-6 bg-blue-600 w-fit p-4 rounded-2xl'>
            <img src={DataImage.HeroImage} alt="Hero Image" className='w-10 rounded-md' loading='lazy' />
            <q>Semua orang punya peluang untuk Suksesss.😎</q>
          </div>
          <h1 className='text-3xl/tight font-bold mb-6'>Hello Word, Saya Anggit Hardiyanto</h1>
          <p className='text-base/loose mb-6 opacity-50'>
            Saya mempunyai ketertarikan dalam bidang Programing dan Desainer, terutama pada bidang pembuatan Website, ketertarikan pada bidang ini sudah berlangsung lebih dari 2 tahun yang lalu.
          </p>
          <div className='flex items-center'>
            <a href="/assets/files/cv-anggit.pdf" className='bg-green-600 p-4 rounded-2xl hover:bg-green-500'>
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img  src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] rounded-2xl md:ml-auto animate__animated animate__fadeInUp animate__delay-2s" loading='lazy' />
      </div>
      {/* end hero */}

      {/* tentang */}
      <div className="tentang mt-32 py-10" id='tentang'>
        <h1 className='text-center text-4xl font-bold mb-10' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tentang</h1>
        <div className='xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-blue-600 rounded-lg' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <p className='text-base/loose mb-10'>
            Hi, perkenalkan saya Anggit Hardiyanto, seorang Mahasiswa dan Web Developer untuk UI/UX Desaign maupun Product Digital, Saya yakin setiap projek yang saya buat akan sangat membantu para user di setiap bidangnya, sehingga setiap projek yang saya kembangkan tidak hanya terlihat menarik tetapi juga mudah digunakan untuk user yang pertama kali menggunakan product digital.
          </p>
        </div>
      </div>

      {/* tools tentang */}
      <div className="tools mt-32">
        <h1 className='text-4xl font-bold mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
        <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa tools yang saya pakai untuk pembuatan Website</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.map(tool => (
            <div className='flex items-center gap-2 p-3 border border-blue-400 rounded-md hover:bg-blue-600 group' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-200 p-1 group-hover:bg-zinc-400' loading='lazy' />
              <div>
                <h4 className='font-bold'>{tool.nama}</h4>
                <p className='opacity-50'>{tool.ket}</p>
              </div>
            </div>
          ))}
    
        </div>
      </div>
      {/* end tentang */}

      {/* project */}
      <div className="proyek mt-32 py-10" id='proyek'>
          <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
          <p className='text-base/loose text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa projek yang saya buat</p>
          <div className="proyex-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map(proyek => (
              <div className='p-4 bg-blue-600 rounded-md' key={proyek.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
                <img src={proyek.gambar} alt="Proyek Image" loading='lazy' />
                <div>
                  <h1 className='text-2xl font-bold my-4'>{proyek.nama}</h1>
                  <p className='text-base/loose mb-4'>{proyek.desk}</p>
                  <div className='flex flex-wrap gap-2'>
                    {proyek.tools.map((tool, index) => (
                      <p className='py-1 px-3 border border-blue-400 bg-blue-500 rounded-md font-semibold' key={index}>{tool}</p>
                    ))}
                  </div>
                  <div className='mt-8 text-center'>
                    {proyek.link && <a className='bg-green-600 p-3 rounded-lg block border border-blue-400 hover:bg-green-500' href={proyek.link}>Source Code</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
      {/* end project */}

      {/* contact */}
      <div className="kontak mt-32 sm:p-10 p-0" id='kontak'>
        <h1 className='text-4xl font-bold mb-2 text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className='text-base/loose text-center opacity-50 mb-10' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/simbakucing459@email.com" method="POST" className='bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" autoComplete='off'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Nama Lengkap</label>
              <input className='border border-blue-400 p-2 rounded-md' type="text" name='nama' placeholder='Masukan Nama...' required />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Email</label>
              <input className='border border-blue-400 p-2 rounded-md' type="email" name='email' placeholder='Masukan Email...' required />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor='pesan'>Pesan</label>
              <textarea className='border border-blue-400 p-2 rounded-md' name="pesan" id="pesan" cols="45" rows="7" placeholder='Pesan...' required></textarea>
            </div>
            <div className='text-center'>
              <button className='bg-green-600 p-3 rounded-lg block w-full cursor-pointer border-blue-400 hover:bg-green-500' type='submit'>Kirim Pesan</button>
            </div>
          </div>
          
        </form>
      </div>
            
      {/* end contact */}
    </>
  )
}

export default App
