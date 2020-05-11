import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition {
	in({from, to, done}) {

		const tl = new TimelineLite();
		tl.fomTo(to, 2, {left:"-100%", top:"50%"}, {left:"0%"})
		.fromTo(to, 2, {height:"2vh"}, {height:"85vh", top:"10%", onComplete: function() {
			done();
		}});
	}
	out({from, done}) {
		done();

	}
}
	export default Fade; 