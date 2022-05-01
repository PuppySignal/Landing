// @Package
import Document from 'next/document';
import Image from 'next/image';
import Head from 'next/head'

// @Project
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/PrivacyPolice.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PuppySignal - Privacy Police</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Privacy Police</h1>
        <pre id={styles.PrivacyPolice}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis hendrerit orci. Maecenas a augue non mauris porta hendrerit. Praesent sodales pretium metus, sed vehicula est posuere et. Nunc eu ligula mi. Duis a quam massa. Suspendisse dictum libero non nunc finibus auctor. Nulla aliquam accumsan nunc, at tempor diam aliquam in. Phasellus convallis eros nec magna pharetra tempus. Phasellus at orci nibh. In hac habitasse platea dictumst. Sed ut purus non justo ullamcorper ultricies. Vivamus sollicitudin accumsan leo, ut efficitur erat vestibulum ut.
          <br/><br/>
          Aliquam ut tellus scelerisque, feugiat lectus placerat, cursus arcu. Cras tempor ullamcorper tellus, dictum lobortis lectus bibendum rhoncus. Maecenas ut augue at felis aliquam fermentum. Nunc vehicula lacus nec urna tristique auctor. Nullam ut tortor vitae dui volutpat pharetra ac scelerisque quam. Vivamus in eleifend dui, vel bibendum nisl. Sed ac magna eu nisi mattis dapibus rhoncus vitae nisl. Suspendisse faucibus, sem sit amet facilisis mollis, magna dui mattis magna, eget placerat magna nisl nec ligula. Aenean sed euismod mi. Fusce at dictum odio. Curabitur volutpat lacus nisl, eu elementum est fermentum ac. Suspendisse convallis, metus condimentum dignissim hendrerit, metus orci egestas magna, a auctor sapien nulla nec purus. Fusce sollicitudin tempus leo sit amet iaculis.
          <br/><br/>
          Nunc eget sollicitudin tellus, at condimentum lorem. Sed euismod massa tortor, eu mollis purus molestie a. Pellentesque euismod, velit a ullamcorper pulvinar, metus felis blandit dui, ut viverra risus ante vel magna. Praesent at ex faucibus, accumsan massa at, iaculis urna. Quisque finibus, quam sed feugiat finibus, odio leo tincidunt ante, interdum consequat enim odio nec ante. In vel convallis metus. Nulla at turpis id elit pellentesque tincidunt et at quam. Maecenas vitae fringilla massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et leo porttitor, pretium lorem sed, dictum ante. Donec vitae lorem quis diam sollicitudin congue eget quis est. Mauris orci dui, ultrices in convallis vestibulum, sagittis eu dolor.
          <br/><br/>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla dui lacus, tempor at aliquet non, ultricies eu odio. Proin volutpat dolor ut dignissim tincidunt. Phasellus non nisl nunc. Praesent eget efficitur turpis, fringilla consectetur enim. Morbi viverra viverra leo ac viverra. Curabitur sollicitudin lacus at pretium gravida. In fringilla, massa et vehicula malesuada, nibh lectus porta nibh, sit amet tempus nibh massa in tortor. Nunc venenatis ex id elit efficitur, sed tincidunt tortor rhoncus. In eget purus congue, iaculis dui eu, bibendum odio. Aliquam ultricies quam libero, nec commodo ligula auctor sed.
          <br/><br/>
          In euismod nisl vel arcu posuere facilisis. Praesent quis diam nec urna tempus hendrerit. Proin non felis tristique, bibendum turpis ut, ultrices risus. Aenean a egestas ligula, convallis dignissim erat. Phasellus eu ipsum in odio lacinia volutpat. Sed dictum tempor nibh, quis ultrices ante vestibulum ut. Curabitur dictum dapibus gravida.
          <br/><br/>
          Vestibulum ipsum dolor, maximus vitae malesuada in, volutpat quis enim. Sed at ipsum ornare, ullamcorper nisi quis, finibus mi. Phasellus sed sollicitudin sem, vel vulputate nibh. In fermentum nunc sapien, ac lacinia nisl porttitor id. Nunc libero lorem, semper eu mattis ultricies, bibendum vel ligula. Aliquam leo quam, eleifend vitae mollis a, ullamcorper quis velit. Aenean sit amet fringilla urna. Integer ac viverra augue, sed sollicitudin felis.
          <br/><br/>
          Pellentesque vitae venenatis odio. Cras pulvinar urna sit amet pretium feugiat. Vestibulum vulputate turpis eu velit imperdiet, ut ornare ex varius. Vivamus faucibus enim risus, in sagittis quam dictum eu. Integer vulputate mi nisl, at ullamcorper tortor laoreet eu. Proin id purus mattis, ornare lectus vel, luctus ipsum. Nunc cursus accumsan vestibulum. Suspendisse volutpat molestie ligula id faucibus. Morbi at faucibus ex.
          <br/><br/>
          Aenean vel lorem ac sapien suscipit imperdiet. Maecenas id purus turpis. Donec et tortor sed mauris lobortis finibus in eget sem. Nullam volutpat mauris a ipsum ullamcorper, sed convallis mi pellentesque. Nulla eget sollicitudin enim, interdum pretium est. Nullam non euismod orci. Fusce eu dictum justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam quis rutrum dui, sit amet tincidunt ipsum.
          <br/><br/>
          Aenean lectus diam, venenatis sed ligula ac, tincidunt posuere nulla. Aliquam eu tempus lorem. Integer justo felis, mollis eget gravida in, interdum et orci. Donec molestie luctus dolor eget imperdiet. Aliquam erat volutpat. Integer cursus pulvinar eros a pellentesque. Duis maximus, justo et lobortis pretium, risus eros tincidunt nibh, non feugiat ligula ex sit amet tellus. Donec eleifend tempor odio, a placerat lorem viverra a. Nulla facilisi.
          <br/><br/>
          Sed eu ullamcorper ipsum, at lacinia erat. Sed luctus sapien non efficitur sagittis. Quisque id justo a elit pulvinar efficitur quis at enim. Integer dolor sapien, condimentum in purus eget, interdum mattis dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut molestie egestas dui sodales consectetur. Etiam nec eleifend felis. 
        </pre>
      </main>
      <Footer />
    </div>
  )
}
