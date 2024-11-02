<script>
	import Callout from '$lib/components/Callout.svelte'
</script>


<svelte:head>
	<title>Contact Us</title>
</svelte:head>


<h1>Contact Us</h1>

Feel free to reach us at our <a href="https://www.facebook.com/upparser/">Facebook Page</a>, at our email, dcsupparser@gmail.com, or fill up this form here!

<Callout>This form does nothing! Website in development.</Callout>

<form on:submit|preventDefault>
	<div class="form-section">
		<label for="name">Name</label>
		<input type="text" id="name" placeholder="First name" />
	</div>
	
	<div class="form-section">
		<label for="email">Email</label>
		<input type="email" id="email" placeholder="Email address" />
	</div>

	<div class="form-section">
		<label for="subject">
			Subject
		</label>
		<input type="subject" id="subject" placeholder="Subject Here" />
	</div>

	<div class="form-section">
		<label for="message">
			Message Body
		</label>

		<textarea type="message" rows=10 id="message"/>
	</div>

	<div class="form-section">
		<input type="checkbox" id="c1" >
		<label for="c1">Receive daily announcements from us!</label>
	</div>

	<input type="submit" value="Submit">
</form>