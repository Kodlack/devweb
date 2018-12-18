<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output encoding="utf-8" method="html" version="5.0"  indent="yes"/>

	<xsl:template match="transat">

		<html lang="fr">

			<head>
				<meta charset="utf-8" />
				<link rel="stylesheet" href="css/route_du_rhum.css" />
				<title>Route du Rhum - 2018</title>
			</head>

			<body>
				<table border = "1">
					<tr>
						<td>
							<img src = "" alt = "Photo du logo de la Route du Rhum"/>
						</td>
						<td><xsl:value-of select = "@nom"/><br />
							<xsl:value-of select = "concat(ville-depart,' - ',ville-arrivee)"/><br />
							<xsl:value-of select ="date-depart"/>
						</td>
					</tr>
					<tr>
						<td valign="top">
							<xsl:apply-templates select = "classes/classe" mode = "sommaire"/>
						</td>
						<td>
							<xsl:apply-templates select = "classes/classe"/>
						</td>
					</tr>
				</table>
			</body>
		</html>
	</xsl:template>
	
	<xsl:template match = "classes/classe" mode = "sommaire">
		<h2 id = "sommaire">
			<xsl:number count="classe" format="1- "/>
			<a href ="#{@nom}">
				<xsl:value-of select="@nom"/>  <xsl:value-of select="@classe"/>
			</a>
		</h2>
	</xsl:template>
		
	<xsl:template match = "classes/classe">
		<h2 id ="{@nom}">
			<xsl:number count="classe" format="1- "/>
			<xsl:value-of select="@nom"/>
			<xsl:value-of select="@classe"/>
		</h2>
		
		<h3><xsl:value-of select="descriptif"/></h3>
		
		<xsl:apply-templates select="voiliers/voilier"/>
		<p><a href="#{@nom}">
				Retour debut classe
			</a>
			<a href="#sommaire">
				Retour au debut du sommaire
			</a>
			</p>
	</xsl:template>
	
	<xsl:template match ="voiliers/voilier">
		<h4>
			<a href="Voilier.html">
			<xsl:value-of select="."/>
			</a>
		</h4>
	</xsl:template>
</xsl:stylesheet>