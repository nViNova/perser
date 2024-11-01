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
		<label for="name">Name</label>x
		<input type="text" id="name" placeholder="First name" />
	</div>
	
	<div class="form-section">
		<label for="email">Email</label>
		<input type="email" id="email" placeholder="Email address" />
	</div>

	<fieldset>
		<legend>
			Which option?
		</legend>

		<div>
			<input type="radio" name="s" id="s1" value="s1">
			<label for="s1">Option 1</label>
		</div>
		<div>
			<input type="radio" name="s" id="s2" value="s2">
			<label for="s2">Option 2</label>
		</div>
		<div>
			<input type="radio" name="s" id="s3" value="s3">
			<label for="s3">Option 3</label>
		</div>
	</fieldset>

	<div class="form-section">
		<input type="checkbox" id="c1" >
		<label for="c1">Sign me up for something!</label>
	</div>

	<input type="submit" value="Do nothing!">
</form>