<div class="newfin-list1">
						<div class="newfin-img"><img src="[field:litpic/]" width="320px" height="176px"> </div>
						<div class="newfin-time">[field:pubdate function="GetDateMK(@me)"/]</div>
						<a href="[field:arcurl/]" class="newfin-li">
						<p>[field:title/]</p>
						<span></span>
						</a>
					</div>
					{/dede:artlist}
					<div class="newfin-list2">
						<ul>
                            {dede:artlist channelid='1' orderby=pubdate typeid="12" row="4" limit=1,3}
							<li>
								<a href="[field:arcurl/]" class="newfin-li">
								<p>[field:title/]</p>
								<span></span>
								</a>
							</li>
                            {/dede:artlist}
						</ul>
					</div>
				</div>
				<!--最新活动-->
				<div class="news-box">
					<div class="newfin-title">
						<P>最新活动</P>
						<span></span>
					</div>
					{dede:arclist row=1 orderby=pubdate limit=0,1 typeid="13"}
					<div class="newfin-list1">
						<div class="newfin-img"><img src="[field:litpic/]" width="320px" height="176px"> </div>
						<div class="newfin-time">[field:pubdate function="GetDateMK(@me)"/]</div>
						<a href="[field:arcurl/]" class="newfin-li">
						<p>[field:title/]</p>
						<span></span>
						</a>
					</div>
					{/dede:artlist}
					<div class="newfin-list2">
						<ul>
                            {dede:artlist channelid='1' orderby=pubdate typeid="13" row="4" limit=1,3}
							<li>
								<a href="[field:arcurl/]" class="newfin-li">
								<p>[field:title/]</p>
								<span></span>
								</a>
							</li>
                            {/dede:artlist}
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--返回-->
		<div class="unifiedbtn-box">
			<a href="javascript:history.back();" class="unif-btna">返回</a>
		</div>
	</div>
</div>

<!--footer-->
{dede:include filename="footer.htm"