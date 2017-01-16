<div class="newfin-list1">
						<div class="newfin-img"><img src="[field:litpic/]" width="320px" height="176px"> </div>
						<div class="newfin-time">[field:pubdate function="GetDateMK(@me)"/]</div>
						<a href="[field:arcurl/]" class="newfin-li">
						<p>[field:title/]</p>
						<span></span>
						</a>
					</div>
					{/dede:arclist}
					<div class="newfin-list2">
						<ul>
                            {dede:artlist channelid='1' orderby=pubdate typeid="11" row="4"  limit=1,3}
							<li>
								<a href="[field:arcurl/]" class="newfin-li">
								<p>[field:title/]</p>
								<span></span>
								</a>
							</li>