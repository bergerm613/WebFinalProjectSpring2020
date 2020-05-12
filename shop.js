Vue.component('product1', {
	template: `<div class="product">
				
				<div class="product-image">
					<img v-bind:src="image">
				</div>
			
				<div class="product-info">
					<h1>{{ product }}</h1>
					<p v-if="inStock">{{inventory}} in Stock</p>
					<p v-else :class="{ redZero: !inStock }">{{inventory}} in Stock</p>
					<p v-if="inStock"></p>
					<p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
					<button v-on:click="addToCart"
							:disabled="!inStock"
							:class="{ disabledButton: !inStock }"
							>Add to Cart
					</button>
					<br />
					<button v-on:click="removeFromCart"
								:disabled="this.$parent.cart == 0"
								:class="{ disabledButton: this.$parent.cart == 0 }"
								>Remove from Cart</button>
			
					
					
				</div>
			</div>`,
			data() {
					return {
						product : 'Nutrition Teaching Tools & Posters',
						image : 'https://www.gophersport.com/cmsstatic/g-26017-MyPlateClassPacks-MyPlateClassPack-36.jpg?medium',
						inventory : 0						
					}
				},

	methods: {
		addToCart: function() {
			this.$emit('add-to-cart'),
			this.inventory -= 1
		},
		removeFromCart: function() {
			this.$emit('remove-from-cart'),
			this.inventory += 1
		}
	},
	computed: {
		inStock: function() {
			return this.inventory
	}
	}
})

Vue.component('product2', {
	template: `<div class="product">
				
				<div class="product-image">
					<img v-bind:src="image">
				</div>
			
				<div class="product-info">
					<h1>{{ product }}</h1>
					<p v-if="inStock">{{inventory}} in Stock</p>
					<p v-else :class="{ redZero: !inStock }">{{inventory}} in Stock</p>
					<p v-if="inStock"></p>
					<p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
					<button v-on:click="addToCart"
							:disabled="!inStock"
							:class="{ disabledButton: !inStock }"
							>Add to Cart
					</button>
					<br />
					<button v-on:click="removeFromCart"
								:disabled="this.$parent.cart == 0"
								:class="{ disabledButton: this.$parent.cart == 0 }"
								>Remove from Cart</button>
			
					
					
				</div>
			</div>`,
			data() {
					return {
						product : 'Child Portion Plate',
						image : 'data:image/jpeg;base64,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',
						inventory : 10						
					}
				},

	methods: {
		addToCart: function() {
			this.$emit('add-to-cart'),
			this.inventory -= 1
		},
		removeFromCart: function() {
			this.$emit('remove-from-cart'),
			this.inventory += 1
		}
	},
	computed: {
		inStock: function() {
			return this.inventory
	}
	}
})

Vue.component('product3', {
	template: `<div class="product">
				
				<div class="product-image">
					<img v-bind:src="image">
				</div>
			
				<div class="product-info">
					<h1>{{ product }}</h1>
					<p v-if="inStock">{{inventory}} in Stock</p>
					<p v-else :class="{ redZero: !inStock }">{{inventory}} in Stock</p>
					<p v-if="inStock"></p>
					<p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
					<button v-on:click="addToCart"
							:disabled="!inStock"
							:class="{ disabledButton: !inStock }"
							>Add to Cart
					</button>
					<br />
					<button v-on:click="removeFromCart"
								:disabled="this.$parent.cart == 0"
								:class="{ disabledButton: this.$parent.cart == 0 }"
								>Remove from Cart</button>
			
					
					
				</div>
			</div>`,
			data() {
					return {
						product : 'Nutrition Education Materials',
						image : 'https://www.healthedco.com/assets/images/products/79204-Visualize-Your-Portion-Size-Display_media-01.jpg?resizeid=12&resizeh=400&resizew=400',
						inventory : 10						
					}
				},

	methods: {
		addToCart: function() {
			this.$emit('add-to-cart'),
			this.inventory -= 1
		},
		removeFromCart: function() {
			this.$emit('remove-from-cart'),
			this.inventory += 1
		}
	},
	computed: {
		inStock: function() {
			return this.inventory
	}
	}
})

var app = new Vue ({
	el: '#app',
	data: {
		cart : 0
	},
	methods: {
		addCart() {
			this.cart += 1
		},
		subtractCart() {
			this.cart -= 1
		}
	}
	
})
